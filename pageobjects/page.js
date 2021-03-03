
let Page = class Page {

	assertDiff(results) {
	  results.forEach((result) => {
		assert.ok(result.isWithinMisMatchTolerance, 'Visual regression is not within mismatch tolerance');
	  });
	}
  }
  module.exports = new Page();