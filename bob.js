/*
# Bob

Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question.

He answers 'Whoa, chill out!' if you yell at him.

He says 'Fine. Be that way!' if you address him without actually saying
anything.

He answers 'Whatever.' to anything else.

### Instructions
1. Review Bob's rules and return the appropriate response.
2. Once you have a passing test suite, add your code to your daily-challenges repo
3. Link us to your bob.js file on Slack.

*/

function hey(string) {
  if ( (/[A-Z]/).test(string) && !(/[a-z]/).test(string)){
    return 'Whoa, chill out!';
  }
  if ( (/\?$/).test(string)) {
    return 'Sure.'
  }
  if ( !string.replace(/ /g, '').length ){
    return 'Fine. Be that way!';
  }
  return 'Whatever.';
}

/// -- do not edit below ---

describe('Bob', function() {

  it('stating something', function() {
    var result = hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).toEqual('Whatever.');
  });

  it('shouting', function() {
    var result = hey('WATCH OUT!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('asking a question', function() {
    var result = hey('Does this cryogenic chamber make me look fat?');
    expect(result).toEqual('Sure.');
  });

  it('talking forcefully', function() {
    var result = hey('Let\'s go make out behind the gym!');
    expect(result).toEqual('Whatever.');
  });

  it('using acronyms in regular speech', function() {
    var result = hey('It\'s OK if you don\'t want to go to the DMV.');
    expect(result).toEqual('Whatever.');
  });

  it('forceful questions', function() {
    var result = hey('WHAT THE HELL WERE YOU THINKING?');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('shouting numbers', function() {
    var result = hey('1, 2, 3 GO!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('only numbers', function() {
    var result = hey('1, 2, 3');
    expect(result).toEqual('Whatever.');
  });

  it('question with only numbers', function() {
    var result = hey('4?');
    expect(result).toEqual('Sure.');
  });

  it('shouting with special characters', function() {
    var result = hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('shouting with no exclamation mark', function () {
    var result = hey('I HATE YOU');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('statement containing question mark', function() {
    var result = hey('Ending with a ? means a question.');
    expect(result).toEqual('Whatever.');
  });

  it('prattling on', function () {
    var result = hey('Wait! Hang on.  Are you going to be OK?');
    expect(result).toEqual('Sure.');
  });

  it('silence', function () {
    var result = hey('');
    expect(result).toEqual('Fine. Be that way!');
  });

   it('prolonged silence', function () {
    var result = hey('   ');
    expect(result).toEqual('Fine. Be that way!');
  });
});
