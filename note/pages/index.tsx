import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string
}

const Component: React.VFC<Props> = ({ className }) => (
  <div className={className}>
    <div>Hello World</div>
    <div>あああ</div>
  </div>
)

const StyledComponent = styled(Component)`
  > div {
    padding: 10px;
  }
`

export default StyledComponent
