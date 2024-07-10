'use client';

export default function ErrorPage({params}) {
  console.log(params);
  return (<p>{params}</p>);
}
