import sql from 'better-sqlite3';

const db = sql('posts.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    email VARCHAR UNIQUE,
    password VARCHAR
  );
`)

db.exec(`
  CREATE TABLE IF NOT EXISTS images (
    id INTEGER PRIMARY KEY,
    title VARCHAR,
    url TEXT UNIQUE NOT NULL
  );
`)

const hasUsers = db.prepare(`SELECT COUNT(*) as count FROM users`).get().count > 0;
if (!hasUsers) {
  db.exec(`
    INSERT INTO users (first_name, last_name, email, password)
    VALUES ('Admin', 'Teste', 'admin@example.com', '')
  `);

  db.exec(`
    INSERT INTO images (title, url)
    VALUES
    ('Flower 01', 'https://res.cloudinary.com/di2rpmtzc/image/upload/v1714306271/samples/dessert-on-a-plate.jpg')
  `);
}


export async function createUser({ name, lastName, email, password }) {
  const result = db.prepare(`
      INSERT INTO users (first_name, last_name, email, password) VALUES
        (?, ?, ?, ?)
    `).run(name, lastName, email, password);
    return result.lastInsertRowid;
}

export function getUserByEmail(email) {
  return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
}

export async function getImages() {
  const result = db.prepare(`SELECT * FROM images`);
  return result.all();
}

export async function createImage({ title, url }) {
  db.prepare(`
    INSERT INTO images (title, url)
    VALUES (?, ?)
  `).run(title, url);
}
