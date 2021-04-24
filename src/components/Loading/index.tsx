import MainHeader from '../MainHeader'
import { SpinnerCircular } from 'spinners-react'

const Loading: React.FC = () => (
  <>
    <MainHeader />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: '#d0d7ff'
      }}
    >
      <SpinnerCircular
        size={'6rem'}
        color="386299"
        secondaryColor="rgba(0,0,0,.1)"
      />
    </div>
  </>
)

export default Loading
