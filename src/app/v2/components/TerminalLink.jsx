const TerminalLink = ({ href, text, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={"!underline " + className}
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

export default TerminalLink;
