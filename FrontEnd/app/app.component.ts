import { Component }         from 'angular2/core';
//Librerie per richieste/risposte Http
import { HTTP_PROVIDERS }    from 'angular2/http';
//librerie per il meccanismo di Routing
import { RouteConfig, ROUTER_DIRECTIVES, RouterOutlet, ROUTER_PROVIDERS } from 'angular2/router';

/*
 * Qui di seguito importiamo tutti i Componenti che agiscono nell'applicazione
 * per dichiarare i path relativi ai vari Workflows.
 */
//Login
import { LoginComponent }             from './login/login.component';
//Admin's Workflows
import { AdminComponent }             from './admin/admin.component';
import { AdminAddUserComponent }      from './admin/admin-addUser.component';
import { AdminViewUserComponent }     from './admin/admin-viewUser.component';
import { AdminUpdateUserComponent }   from './admin/admin-updateUser.component';
//Controller's Workflows
import { ControllerComponent }        from './controller/controller.component';
import { CtrlProjectsComponent }      from './controller/projects/ctrl-projects.component';
import { CtrlEmployeesComponent }     from './controller/employees/ctrl-employees.component';
//Employee's Workflows
import { EmployeeComponent }          from './employee/employee.component';
//ProjectManager's Workflows
import { PMComponent }                from './pm/pm.component';

/*
 * Qui di seguito dichiariamo che il @Component AppComponent si riferisce al tag <my-app>,
 * che viene tradotto nel contenuto del campo "template", ovvero nel tag '<router-outlet></router-outlet>'.
 * RouterOutlet è un componente che mostra le views all'interno del tag <router-outlet> a seconda del path
 * che viene richiesto.
 * Con il campo directives stiamo dichiarando che il suddetto tag verrà gestito/tradotto dalle
 * ROUTER_DIRECTIVES, dichiarate in @RouteConfig.
 * Con il campo providers stiamo dichiarando che l'applicazione utilizzerà i Servizi Http e quelli
 * offerti dai file "service" della nostra applicazione.
 */
@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>',
    directives: [ ROUTER_DIRECTIVES ],
    providers:  [ HTTP_PROVIDERS, ROUTER_PROVIDERS
                  //, LoginService, AdminService, ControllerService, EmployeeService, PMService
                ]
})

/*
 * Il decoratore @RouteConfig crea un nuovo router.
 * Applichiamo tale decoratore al modulo AppComponent, che in tal modo sarà l'host del router.
 * All'interno di @RouteConfig() dichiariamo un array di Route Definitions.
 * Ogni definizione si traduce in una Route che ha:
 * 1) path - l'URL della Route
 * 2) name - nome della Route
 * 3) component - il componente associato con la route
 * Quando l'URL del browser matcha con una delle Route dichiarate, viene creata o
 * restituita un'istanza del Componente associato e viene mostrato nella Single-Page.
 */
@RouteConfig([
    //Login
    {path:'/',                          name: 'Login',               component: LoginComponent, useAsDefault: true},
    //Admin's Workflows
    {path:'/admin',                     name: 'Admin',               component: AdminComponent},
    {path:'/admin/addUser',             name: 'AddUser',             component: AdminAddUserComponent},
    {path:'/admin/viewUser',            name: 'ViewUser',            component: AdminViewUserComponent},
    {path:'/admin/updateUser',          name: 'UpdateUser',          component: AdminUpdateUserComponent},
    //Controller's Workflows
    {path:'/controller',                name: 'Controller',          component: ControllerComponent},
    {path:'/controller/projects',       name: 'CtrlProjects',        component: CtrlProjectsComponent},
    {path:'/controller/employees',      name: 'CtrlEmployees',       component: CtrlEmployeesComponent},
    //Employee's Workflows
    {path:'/employee',                  name: 'Employee',            component: EmployeeComponent},
    //ProjectManager's Workflows
    {path:'/pm',                        name: 'PM',                  component: PMComponent}
])

export class AppComponent { }
