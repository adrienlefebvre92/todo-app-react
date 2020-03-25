import StorageService from './storage-service';

class TodoService extends StorageService {
  constructor() {
    super('todos');
  }
}

export default new TodoService();
