import Form from 'react-bootstrap/Form';

const InputField = ({ name, label, type, placeholder, error, fieldRef, style, as }) => {
  return (
    <Form.Group controlId={name} className="InputField">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        as={as || 'input'} // Use 'textarea' when specified
        type={type || 'text'}
        placeholder={placeholder}
        ref={fieldRef}
        style={style}
      />
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form.Group>
  );
}

export default InputField;
