import { HomeLink } from './index'

export default function StaticPage({ test }: { test: string }) {
  return (
    <div>
      Static Page
      <div>{test}</div>
      <HomeLink />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      test: 'test string static',
    }, // will be passed to the page component as props
  }
}
