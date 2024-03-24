import Spinner from 'react-bootstrap/Spinner'

const LoadingSkeleton = () => {
  return (
    <>
    <Spinner animation="border" size="sm" />
    <Spinner animation="border" />
    <Spinner animation="grow" size="sm" />
    <Spinner animation="grow" />
  </>
  )
}

export default LoadingSkeleton