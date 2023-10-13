
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    ListGroup,
    Badge,
    Stack,
} from "react-bootstrap";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: "",
            Description: "",
            completed: false,
            todos: [],
        };
    }

    handleTitleChange = (event) => {
        this.setState({ Title: event.target.value });
    };

    handleDescriptionChange = (event) => {
        this.setState({ Description: event.target.value });
    };

    handleAddTodo = () => {
        const { Title, Description, todos } = this.state;
        if (Title) {
            const newTodo = {
                title: Title,
                description:Description,
                completed: false,
            };
            this.setState({
                todos: [...todos, newTodo],
                Title: "",
                Description: "",
                showEditForm: false,
            });
        }
    };

    handleDeleteTodo = (index) => {
        const { todos } = this.state;
        todos.splice(index, 1);
        this.setState({ todos });
    };

    handleUpdateTodo = (index) => {
        const { todos } = this.state;
        const update_Todo = todos[index];

        const updateTitle = prompt("title:", update_Todo.title);
        const updateDescription = prompt("description:", update_Todo.description);

        if (updateDescription !== null && updateTitle !== null) {
            update_Todo.title = updateTitle;
            update_Todo.description = updateDescription;
            this.setState({ todos });
        }
    };


    render() {
        const { todos, Title, Description } = this.state;

        return (
            <Container className="cont" style={{ width: "100%", height: "600px", background: "black", color: "white", marginTop: "20px" }}>
                <Container className="cont1">
                    <Row style={{ background: "black" }}>
                        <Col>
                            <h2>Todo App</h2>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={Title}
                                        onChange={this.handleTitleChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        as="textarea"
                                        value={Description}
                                        onChange={this.handleDescriptionChange}
                                    />
                                </Form.Group>
                                <br />
                                <Button variant="primary" onClick={this.handleAddTodo}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <Container className="cont2">
                    <Row>
                        <Col>
                            <h3>Todo List</h3>
                            <ListGroup>
                                {todos.map((todo, index) => (
                                    <ListGroup.Item key={index}>
                                        <Stack direction="horizontal" gap={3}>
                                            <Stack gap={3}>
                                                <div className="p-2">
                                                    <div className="p-2">{todo.title}</div>
                                                    <div className="p-2">{todo.description}</div>
                                                </div>
                                            </Stack>
                                            <div className="p-2 ms-auto">
                                                <Stack direction="horizontal" gap={3}>
                                                    {todo.completed && (
                                                        <h6>
                                                            <Badge bg="success">&#10004;</Badge>
                                                        </h6>
                                                    )}
                                                    <Button
                                                        size="sm"
                                                        variant="danger"
                                                        onClick={() => this.handleDeleteTodo(index)}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                        </svg>
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="primary"
                                                        onClick={() => this.handleUpdateTodo(index)}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                                        </svg>
                                                    </Button>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
                                                        <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                                                    </svg>
                                                 
                                                </Stack>
                                            </div>
                                        </Stack>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default App;
