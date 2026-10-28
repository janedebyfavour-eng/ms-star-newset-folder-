      console.log('hello world');
      setTimeout(() => {
          console.log('hello world after 2 seconds');
      }, 2000);
      console.log('world2');
      
      
      function sum(a, b) {
        console.log(a + b);
        }

        function sub(a, b) {
        console.log(a - b);
        }
        function calculate(a, b, operation) {
            operation(a, b);
        }
        calculate(3, 4, sub);

        const dosomething =
          setTimeout(() =>{
            const skill = ['html', 'css', 'js'];
            callback ('it did not go well', skill);
        })