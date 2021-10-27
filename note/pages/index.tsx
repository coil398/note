import { NextPage } from 'next'
import styled from 'styled-components'

interface Props {
  className: string
}

const Component: NextPage<Props> = ({ className }) => (
  <div className={className}>
    <div className="hero">
      <h1 className="title">Next.js + Tailwind CSS</h1>
      <p className="text-center text-teal-500 text-2xl py-4">
        This is an Example.
      </p>
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  > div {
    padding: 10px;
  }
`

export default StyledComponent
