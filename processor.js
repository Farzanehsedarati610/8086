MOV AX, [hashTable]   ; Load SHA-256 hash into AX register  
MOV BX, [accountNumber]  ; Transfer account number to register BX  
MOV CX, [routingNumber]  ; Store routing number in CX  
XCHG AX, BX           ; Swap hashed value between registers  
OUT DX, AL            ; Send transaction data to banking system via port 8086  

