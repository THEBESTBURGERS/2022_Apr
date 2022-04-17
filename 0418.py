## 전역변수 선언부분 ##
## 전역변수 : 코드 전체에서 사용할 변수
i, k = 0, 0

## 메인코드 부분 ##
i = 0

## while i<9이므로 범위를 0부터 8까지 설정 -> range(0, 9)
for i in range(0, 9):
  ## 출력결과에서 위에서부터 5줄은 하트 개수가 많아지니까
  ## i가 0, 1, 2, 3, 4 일때 이므로 if i<5라는 범위가 나오는거임
  if i < 5:
    k = 0
    ## 공백을 출력
    for k in range(0, 4-i):
      print(" ", end='')
    ## 하트를출력
    for k in range(0, i*2+1):
      print('❤', end='')
  ## i<5가 아닐경우 즉 출력결과에서 6번째줄부터는 하트가 감소하는 형태
  else:
    k = 0
    ## 공백출력
    for k in range(0, i-4):
      print(" ", end='')
    ## 하트 출력
    for k in range(0,(9-i)*2-1):
      print('❤', end='')
  ## 줄바꿈을 위한 print()
  print()

## end=""는 줄바꿈을 하지 않고 출력하는코드