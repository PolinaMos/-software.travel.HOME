describe('My angular App test', function() {
  var firstNumber = element(by.model('numberFirst'));
  var secondNumber = element(by.model('numberSecond'));
  var result = element(by.model('sum'))
  

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    
  }

  beforeEach(function() {
    browser.get('http://polinamos.github.io/#/');
  });
  
	 it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Lesson-1.(02-02-16)');
  }); 
  
  it('should have calculate', function() {
    add(1, 2);
    

    expect(result.getText()).toEqual('3');

    add(5, 6);

    expect(result.getText()).toEqual('9');; // This is wrong!
  });
});
