import PropTypes from "prop-types";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useOrderDetails } from "../../contexts/OrderDetails";

const ScoopOptions = (props) => {
  const { name, imagePath } = props;
  const { updateItemCount } = useOrderDetails();

  const handleChange = (e) =>
    updateItemCount(name, parseInt(e.target.value), "scoops");

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Form.Label column xs="6" style={{ textAlign: "right" }}>
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: "left" }}>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
    </Col>
  );
};

ScoopOptions.propTypes = {
  name: PropTypes.string,
  imagePath: PropTypes.string,
};

export default ScoopOptions;
