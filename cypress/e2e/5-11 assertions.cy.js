/* 
click ()
type () ===> so you can type something in an input 
check()
uncheck() ==> only used for radio and checkboxes 

select() => used for Dropdown that is created using the <select> tag `


to set timeout (AKA how long to wait for the webelement to show) =>  {timeout: 10000}
ex: cy.get( "inputs" {timeout: 10000}).should("have.text")


shoud(be.visable)
shoud('have.text', 'text can be put here')


dont use eq() or include() because it will be looking for TEXT but the web element returns an object, the ony way to read the text itself 
is to use have.text() or include.text() or contain()


should('have.attr', 'id', "name of id")
should('have.length', number)
should('have.length.greaterThan', number)


should ('be.enabled')  ==> checks if the element can be interactable 
should ('have.value', 'what should it have text wise')  ==> checks if input has text or dropdown has a given value 
should (be.checked)
should(not.be.checked)
----------------------------------


three types of Assertions : 
DEFAULT : most cypress command will have auto wait mechanish if the element is in the DOM or not 
will also make sure commands are actionable and not hidden from view 

IMPLICIT: assertions using .should()/ .and() method. using this type of assertion, it wont fail right away, it will wait until the condition becomes
true, so it ina sense it waits to retry

Cypress is DYNAMIC and as a result it offers an atvantage over other platforms in the sense that it will wait for a designated amount of time 
to see if the condition is/ can be true before giving you a fail message. 

EXPLICIT: avoid using it if possible, unlike implicit it if the condition is false it won wait to rerety for 4 seconds it will just say it failed. 
this is when you use expect()




*/