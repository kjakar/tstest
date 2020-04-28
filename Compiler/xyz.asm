default rel
section .text
global main
main:
push qword 2 ; factor node
push qword 2 ; factor node
pop rbx ; sum node
pop rax ; sum node
add rax, rbx ; sum node
push rax ; sum node
cmp qword [rsp], 0 ; and node
je lbl0 ; and node
add rsp, 8 ; and node
push qword 0 ; factor node
lbl0: ; and node
cmp qword [rsp], 0 ; convert 1/0
setne al ; convert 1/0
movzx rax, al ; convert 1/0
mov [rsp], rax ; convert 1/0
cmp qword [rsp], 0 ; or node
jne lbl1 ; or node
add rsp,8 ; or node
push qword 7 ; factor node
push qword 4 ; factor node
pop rax ; term node
pop rbx ; term node
imul rax, rbx ; term node
push rax ; term node
lbl1: ; or node
pop rax ; retrun node
ret ; retrun node
ret
section .data