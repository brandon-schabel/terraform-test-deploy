import {HomeLink} from "./index";

export default function ServerPage({ test }: { test: string }) {
  return (
    <div>
      Server Render Page
      <div>{test}</div>
        <HomeLink />
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      test: 'test string server side',
    }, // will be passed to the page component as props
  }
}
