set ANTLR="C:\Users\Alex\source\repos\kjakar\tstest\Compiler\antlr-4.8-complete.jar"
set JAVA="C:\Program Files (x86)\Common Files\Oracle\Java\javapath\java.exe"
%JAVA% -cp %ANTLR% org.antlr.v4.Tool -Dlanguage=JavaScript "%1"