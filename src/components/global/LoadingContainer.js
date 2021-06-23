import LoadingCircle from "./LoadingCircle";


export default function LoadingContainer(props){
  return (
    <div style={{margin: '1rem auto', textAlign: 'center'}}>
      <LoadingCircle size={40} />
    </div>
  )
}
