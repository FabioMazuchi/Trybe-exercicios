const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

// console.log(uppercase('fabio'));

it('uppercase  "test" to equal "TEST"', (done) => {
  uppercase("test", (str) => {
    try {
      expect(str).toBe("TEST");
      done();
    } catch (error) {
      done(error);
    }
  });
});
