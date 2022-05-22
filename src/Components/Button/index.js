
export default function Button({text,buttonClick}) {
  return (
    <button onClick={buttonClick}>
        {text}
    </button>
  )
}
