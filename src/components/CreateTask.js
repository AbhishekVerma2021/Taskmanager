import { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Container,
  Box,
  Typography,
} from "@mui/material";
import { createTask } from "../utils/tasksUtility";

const EditTaskForm = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "pending",
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdTask = await createTask(taskData);
      if (createdTask) {
        setTaskData({
          title: "",
          description: "",
          dueDate: "",
          status: "pending",
        });
        alert("Task created successfully!");
      } else {
        alert("Failed to create the task.");
      }
    } catch (error) {
      alert("An error occurred while creating the task.");
      console.error(error);
    }
  };


  // Function to handle changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "bisque",
          marginTop: '50px', marginBottom: '30px',
          border: "3px solid black"
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography
            component="h1"
            variant="h2"
            sx={{ textAlign: "center", marginBottom: "2.6rem" }}
          >
            Create Your Task
          </Typography>
          <Grid
            container
            spacing={3}
            sx={{
              padding: "16px 8px",
              borderRadius: "8px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
              border: "2px solid black",

            }}
          >
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Title of your task "
                name="title"
                value={taskData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                rows={5}
                label="Description of your task "
                name="description"
                value={taskData.description}
                onChange={handleChange}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="date"
                name="dueDate"
                InputProps={{
                  placeholder: 'Due date',
                }}
                value={taskData.dueDate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={10} display={"flex"} justifyContent={"center"} >
              <Button variant="contained" color="primary" type="submit" fontSize="3rem">
                Create Your Task
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default EditTaskForm;
