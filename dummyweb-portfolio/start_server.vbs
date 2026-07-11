Set shell = CreateObject("WScript.Shell")
shell.CurrentDirectory = "C:\Users\yc\Desktop\Dummyweb\dummyweb-portfolio\out"
shell.Run "python -m http.server 3000", 0, False
