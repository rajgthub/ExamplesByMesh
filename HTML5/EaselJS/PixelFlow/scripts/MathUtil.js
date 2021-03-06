/*
	The MIT License

	Copyright (c) 2011 Mike Chambers

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/

MathUtil = {};


//returns the angle in radians between two points
MathUtil.getAngleBetweenPoints = function(p1, p2)
{
	var dx = p1.x - p2.x;
	var dy = p1.y - p2.y;
	var radians = Math.atan2(dy, dx);
	
	return radians;
}

//returns the distance between two points
MathUtil.distanceBetweenPoints = function(p1, p2)
{
	var dx = p1.x - p2.x;
	var dy = p1.y - p2.y;
	
	//we might be able to optimize this to not use Math.sqrt
	//need to profile and benchmark
	var dist = Math.sqrt(dx * dx + dy * dy);

	return dist;
}