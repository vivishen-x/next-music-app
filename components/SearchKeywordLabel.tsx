import Link from "next/link";

export default function SearchKeywordLabel({ keyword }: { keyword: string }) {
  const href = `/search/${keyword}`;
  return (
    <>
      <Link href={href}>
        <a>
          <span className="label-container">{keyword}</span>
        </a>
      </Link>
      <style jsx>
        {`
          .label-container {
            cursor: pointer;
            display: inline-block;
            height: 32px;
            line-height: 32px;
            padding: 0 15px;
            margin: 0 8px 8px 0;
            background: #ffffff;
            border: solid 1px #e3e3e3;
            border-radius: 15px;
          }
          .label-container:hover {
            color: #d43c33;
            border: solid 1px #d43c33;
          }
        `}
      </style>
    </>
  );
}
