#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import random

# if statements
x = random.randrange(0,3)
print(x)
if x < 0:
    x = 0
    print('Negative changed to zero')
elif x == 0:
    print('Zero')
elif x == 1:
    print('Single')
else:
    print('More')

# for statement
words = ['cat','window','defenestrate']
for w in words:
    print(w,len(w))

# range() function
# from 0 to 4
for i in range(5):
    print(i)

# from 0 to 10, step 2
for i in range(0,10,2):
    print(i,end=',')

# you can combine len() and range()
a = ['Mary','had','a','little','lamb']
for i in range(len(a)):
    print(i, a[i])

# this doesn't works
print(range(10))

# however
print(list(range(10)))

# or
print(sum(range(10)))

# break and continue statement
for n in range(2,10):
    for x in range(2, n):
        if n % x == 0:
            print('n =', n, 'x =', x)
            # exit the loop then go to the next statement (else)
            break
    else:
        # loop's else clause runs when no break occurs
        print(n, "is a prime number")

# the code in the else block runs only if the loop complete without encountering a break
for i in range(3):
    password = 'secret' # input('Enter password: ')
    if password == 'secret':
        print('You guessed the password!')
        break
else:
    print('3 incorrect password attempts')

# break statement close a loop
for x in range(0,5):
    if x == 3:
        break
        print(x)
print("break")

# continue statement moves the control back to the top of the loop
for x in range(0,10):
    if x % 2 == 0:
        continue
    print(x)

# pass statement does nothing
class emptyClass:
    pass

def emptyFunction():
    pass

# defining a function
def fib(arg):
    ''' Print a fibonacci series up to arg '''
    a, b = 0, 1
    while a < arg:
        print(a, end=' ')
        a, b = b, a+b

# calling a function
fib(100)












