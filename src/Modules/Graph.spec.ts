import 'mocha';
import { expect } from 'chai';

import { generateAdjacencyList } from './Graph';

describe('Graph Module', () => {
  describe('generateAdjacencyList', () => {
    it('should an object where the joint key are equal to the inputted string', () => {
			const path = 'a-b-c';
			const adjList = generateAdjacencyList(path);
      expect(Object.keys(adjList).join('-')).equal(path);
    });

		it('should an object where number of keys are the total of the nodes', () => {
			const path = 'a-b-c, c-d, e';
			const adjList = generateAdjacencyList(path);
      expect(Object.keys(adjList).length).equal(5);
    });

		it('should an object where the nodes have the right neighbors', () => {
			const path = 'a-b-c';
			const adjList = generateAdjacencyList(path);
      expect(adjList['a'].has('b')).equal(true);
			expect(adjList['b'].has('a')).equal(true);
			expect(adjList['b'].has('c')).equal(true);
			expect(adjList['c'].has('b')).equal(true);
    });

		it('should throw an error if there are less than 3 nodes', () => {
			let path = '';
			expect(() => generateAdjacencyList(path))
				.to.throw()
				.with.property('message', 'Invalid graph provided: less than 3 nodes.');
			
			path = 'a';
			expect(() => generateAdjacencyList(path))
				.to.throw()
				.with.property('message', 'Invalid graph provided: less than 3 nodes.');
			
			path = 'a-b';
			expect(() => generateAdjacencyList(path))
				.to.throw()
				.with.property('message', 'Invalid graph provided: less than 3 nodes.');
    });

		it('should throw an error if a node is empty', () => {
			let path = 'a-,b-c';
			expect(() => generateAdjacencyList(path))
				.to.throw()
				.with.property('message', 'Invalid node: cannot be an empty string.');
			
			path = 'a-b, -c';
				expect(() => generateAdjacencyList(path))
					.to.throw()
					.with.property('message', 'Invalid node: cannot be an empty string.');
		});
  });
});
