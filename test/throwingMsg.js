var assert = require('../lib/assert.js');

var withMessage = function()
{
    throw new Error("myMessage")
};
var noMessage = function()
{
   throw new Error();
};

suite("If no Message was send:",function(){
    test("No Message send, nothing expected => ok",function(){
        assert.doesNotThrow(function(){
           assert.that(noMessage,is.throwingMsg());
        });
    });
    test("No Message send, but expected => error",function(){
        assert.throws(function(){
           assert.that(noMessage,is.throwingMsg("test")); 
        });
    });
});

suite("If a Message was send",function(){
   test("Message send, nothing expected => error",function(){
        assert.throws(function(){
           assert.that(withMessage,is.throwingMsg()); 
        });       
   });
   test("Message send and expected, not same => error", function(){
        assert.throws(function(){
           assert.that(withMessage,is.throwingMsg("test")); 
        });         
   });
   test("Message send and expected and is the same => ok",function(){
        assert.doesNotThrow(function(){
           assert.that(withMessage,is.throwingMsg("myMessage"));
        });       
   });
});
