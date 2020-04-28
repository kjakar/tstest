default rel
section .text
global main
main:
push qword 12 ; factor node
push qword 6 ; factor node
pop rax ; term node
pop rbx ; term node
idiv rax, rbx ; term node
push rax ; term node
pop rax ; retrun node
ret ; retrun node
ret
section .data