import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryModelService implements InMemoryDbService {
  createDb() {
    let employees = [
        { id: 1, name: 'Juan', company: 'Windstorm', age: 56, birthday: new Date('07/01/2018'), favoriteColor: 'green', project: 1 },
        { id: 2, name: 'Pedro' , company: 'Windstorm', age: 67, birthday: new Date('07/03/2018'), favoriteColor: 'yellow', project: 2 },
        { id: 3, name: 'Andres' , company: 'Windstorm', age: 46, birthday: new Date('07/02/2018'), favoriteColor: 'white', project: 3 },
        { id: 4, name: 'Mario' , company: 'Windstorm', age: 23, birthday: new Date('07/04/2018'), favoriteColor: 'blue', project: 4 },
        { id: 5, name: 'Alberto' , company: 'Windstorm', age: 45, birthday: new Date('04/01/2018'), favoriteColor: 'black', project: 5 },
        { id: 6, name: 'Jose' , company: 'Windstorm', age: 67, birthday: new Date('06/01/2018'), favoriteColor: 'yellow', project: 2 },
        { id: 7, name: 'Esteban' , company: 'Windstorm', age: 50, birthday: new Date('09/01/2018'), favoriteColor: 'white', project: 3 },
        { id: 8, name: 'Felipe' , company: 'Windstorm', age: 50, birthday: new Date('11/11/2018'), favoriteColor: 'green', project: 1 },
      ];
      
  
    let projects = [ 
        { id: 1, name: 'Project1', teamSize: 11, clientName: 'Super' },
        { id: 2, name: 'Project2', teamSize: 10, clientName: 'Hiper' },
        { id: 3, name: 'Project3', teamSize: 4, clientName: 'Market' },
        { id: 4, name: 'Project4', teamSize: 5, clientName: 'Info' },
    ];
    return {employees, projects};
  }
}