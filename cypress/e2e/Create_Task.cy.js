
import Login_Data from '../fixtures/profile.json';
const Email_Field = '[data-test="login-email-input"]'
const Password_field = '[data-test="login-password-input"]'
const Task = '[data-test="float-button__toggle-simple-container-create-task"]'
const Task_Title = '[data-test="draft-view__title-task"]'
const Create_task = '[data-test="draft-view__submit-btn_createTask"]'
const Dashboard = '[data-test="dashboard-table__body-public"]'
const Assign = '#task-86bwbbqq8 > [data-test="task-row__container__Oasis Assessment"] > .cu-task-row-assignee'
const Due_Date = '[data-test="user-group_due-date"]'


describe('Create Task', function() {

   it('Create Task', function() {

       cy.visit('https://app.clickup.com/login')
       
       // Url Assertion

       cy.url().should('include', 'clickup','/login')

       cy.get('.login-page-new__main-form').contains('Welcome back!')

       cy.get(Email_Field).type(Login_Data.Email)
    
       cy.get(Password_field).type(Login_Data.Password)
    
       cy.get('[data-test="login-submit"]').click()

       cy.wait(40000)
      
       cy.get(Task).click()

       cy.get(Task_Title).click().wait(2000).type(' Oasis Assessment')

       cy.get('.ql-editor').type('The task is to assess technical abilities')

       cy.get(Create_task).click()

       //Assertion to verify the task was created
       
       cy.get('[data-test="copy-item-toast__undo-content"]').contains('Oasis Assessment Created!')

       cy.get(Dashboard).contains('Oasis Assessment')

       //  cy.get(Assign).click()

       cy.get('.cu-task-row-assignee').click()

       //Assign task

       cy.get('[data-test="user-list__omidelesodiq@gmail.com"]').click({ force: true })

       // Set Due date to 2 weeks

       cy.get(Due_Date).click({ force: true })

       cy.get('[data-test="quick-date-options__2 weeks"]').click()

    }) 
})