default rel
section .text
global main
main:
push qword 2
push qword 2
pop rbx
pop rax
add rax, rbx
push rax
cmp qword [rsp], 0
je lbl0
add rsp, 8
push qword 0
lbl0:
cmp qword [rsp], 0
setne al
movzx rax, al
mov [rsp], rax
cmp qword [rsp], 0
jne lbl1
add rsp,8
push qword 7
push qword 4
pop rax
pop rbx
imul rax, rbx
push rax
lbl1:
pop rax
ret
ret
section .data