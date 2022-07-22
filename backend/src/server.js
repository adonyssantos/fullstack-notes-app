import express from 'express';
import cors from 'cors';
import config from './config.js';
import database from './database.js';

const app = express();

app.use(cors());
app.use(express.json());
database.connect();

app.get('/notes', (_request, response) => {
  let sql = 'select * from notes order by created_at desc;';

  database.query(sql, (error, results) => {
    if (error) {
      response.status(500).json({
        error: error.message,
        message: 'Error fetching notes!',
        data: null,
      });
      return;
    }

    response.json({
      error: null,
      message: 'Notes fetched successfully!',
      data: results,
    });
  });
});

app.get('/notes/:id', (request, response) => {
  let id = request.params.id;
  let sql = 'select * from notes where id = ?;';

  database.query(sql, [id], (error, results) => {
    if (error) {
      response.status(500).json({
        error: error.message,
        message: 'Error fetching note!',
        data: null,
      });
      return;
    }

    if (results.length === 0) {
      response.status(404).json({
        error: '404 Not Found',
        message: 'Note not found!',
        data: null,
      });
      return;
    }

    response.json({
      error: null,
      message: 'Note fetched successfully!',
      data: results[0],
    });
  });
});

app.post('/notes', (request, response) => {
  let sql = 'insert into notes (title, content) values (?, ?);';
  let values = [request.body.title, request.body.content];

  const validation =
    request.body.content.trim() === '' ||
    request.body.title.trim() === '' ||
    !request.body.title ||
    !request.body.content;

  if (validation) {
    response.status(400).json({
      error: '400 Bad Request',
      message: 'Content cannot be empty!',
      data: null,
    });
    return;
  }

  database.query(sql, values, (error, results) => {
    if (error) {
      response.status(500).json({
        error: error.message,
        message: 'Error creating note!',
        data: null,
      });
      return;
    }

    let sql = 'select * from notes where id = ?;';
    let values = [results.insertId];

    database.query(sql, values, (error, results) => {
      if (error) {
        response.status(500).json({
          error: error.message,
          message: 'Error fetching created note, but note was created!',
          data: null,
        });
        return;
      }

      if (results.length === 0) {
        response.status(404).json({
          error: '404 Not Found',
          message: 'Note not found!',
          data: null,
        });
        return;
      }

      response.json({
        error: null,
        message: 'Note created successfully!',
        data: results[0],
      });
    });
  });
});

app.put('/notes/:id', (request, response) => {
  let sql = 'update notes set title = ?, content = ? where id = ?;';
  let values = [request.body.title, request.body.content, request.params.id];

  const validation =
    request.body.content.trim() === '' ||
    request.body.title.trim() === '' ||
    !request.body.title ||
    !request.body.content;

  if (validation) {
    response.status(400).json({
      error: '400 Bad Request',
      message: 'Content cannot be empty!',
      data: null,
    });
    return;
  }

  database.query(sql, values, (error, results) => {
    if (error) {
      response.status(500).json({
        error: error.message,
        message: 'Error updating note!',
        data: null,
      });
      return;
    }

    let sql = 'select * from notes where id = ?;';
    let values = [request.params.id];

    database.query(sql, values, (error, results) => {
      if (error) {
        response.status(500).json({
          error: error.message,
          message: 'Error fetching updated note, but note was updated!',
          data: null,
        });
        return;
      }

      if (results.length === 0) {
        response.status(404).json({
          error: '404 Not Found',
          message: 'Note not found!',
          data: null,
        });
        return;
      }

      response.json({
        error: null,
        message: 'Note updated successfully!',
        data: results[0],
      });
    });
  });
});

app.delete('/notes/:id', (request, response) => {
  let sql = 'delete from notes where id = ?;';
  let values = [request.params.id];

  database.query(sql, values, (error, results) => {
    if (error) {
      response.status(500).json({
        error: error.message,
        message: 'Error deleting note!',
        data: null,
      });
      return;
    }

    response.json({
      error: null,
      message: 'Note deleted successfully!',
      data: null,
    });
  });
});

app.listen(config.server.port, () => {
  console.log(`Server is running on port ${config.server.port}`);
});
