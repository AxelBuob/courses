#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# This is a single line comment

''' This is
a multiple
lines comment '''

# NUMBERS
print("2 + 2 =",2+2) # Addition
print("10 - 5 =",10-5) # Substraction
print("6 / 2 =",6/2) # Division 
print("10 * 5 =",10*5) # Mutltiplication
print("7 % 5 =",7%5) # Modulo
print("2 ** 5 =",2**5) # to the 2 power of five

# STRINGS
print("\n") # \n mean new line
print(r'C:\some\name') # note r before the quote

# \ prevent new line
print("""\
Usage: thingy [OPTIONS]
    -h                  Display this usage message
    -H hostname         Hostname to connect to
""")

# Strings can be concatinated
print(3 * 'un' + 'ium')

word = 'Python'
print(word[0]) # first character
print(word[5]) # character in position 5
print(word[-1]) # last character
print(word[-2]) # second-last character
print(word[0:2]) # characters from position 0 (included) to 2 (excluded)
print(word[2:5]) # characters from position 2 (included) to 5 (excluded)
print(word[:2]) # characters from the beginning to position 2 (excluded)
print(word[4:]) # characters from position 4 (included) to the end
print(word[-2:]) # characters from the second-last (included) to the end

# Python strings cannot be changed - they are immutable
# if you need a different one, you should create a new one
print('J' + word[1:])
print(word[:2] + 'py')

s = 'supercalifragilisticexpialidocious'
print(len(s)) # return the length of a string

# LISTS
squares = [ 1,4,9,16,25]

# like strings lists can be indexed and sliced
print(squares[0])
print(squares[-1])
print(squares[-3:])

# this slice return a shallow copy of the list
squares_copy = squares[:]
print(squares_copy)

# concatenation
print(squares + [36,49,64,81,100])

# replace a value
cubes = [1,8,27,65,125]
cubes[3] = 64

# add item to a list
cubes.append(216)
cubes.append(7 ** 3)

print(cubes)

letters = ['a','b','c','d','e','f','g']
# replace some values
letters[2:5] = ['C','D','E']
# remove them
letters[2:5] = []
# clear the list
letters[:] = []
# count elements
len(letters)

# list nesting
a = [1,2,3,4,5]
b = [6,7,8,9,10]
x = [a,b]

print(x)
print(x[0][1])

# Fibonacci series:
# the sum of two elements define the next
a,b = 0,1
while a < 1000:
    print(a,end=',') # the argument end can the output with a different string
    a, b = b, a+b





























