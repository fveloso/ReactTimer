var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render pause when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdowsStatus="started"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButon = $el.find('button:contains(Pause)');
            expect($pauseButon.length).toBe(1);
        });

        it('should render start when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdowsStatus="pause"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $startButton = $el.find('button:contains(Start)');
            expect($startButton.length).toBe(1);
        });
    });

});