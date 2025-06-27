function CapsLock(props){
    const textoInserido= props.children
    const textoCaps= textoInserido.toUpperCase()

    return <div>{textoCaps}</div>
   
}
export default CapsLock