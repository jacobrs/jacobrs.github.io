export default function Keyword({word, type}) {

  const baseStyle = {
    padding: 0
  }

  const techStyle = {
    ...baseStyle,
    color: 'var(--peach)'
  };

  const statStyle = {
    ...baseStyle,
    color: 'var(--red)'
  }

  const languageStyle = {
    ...baseStyle,
    color: 'var(--green)'
  }

  return (
    <>
      {type === 'tech' && <span style={techStyle}>{word}</span>}
      {type === 'stat' && <span style={statStyle}>{word}</span>}
      {type === 'language' && <span style={languageStyle}>{word}</span>}
    </>
  );
}
