`timescale 1ns / 1ps


module alu8(opcode,op1,op2,result,flagc,flagz);
input [2:0]opcode;
input [7:0] op1,op2;
output reg[15:0] result;
output reg flagc=1'b0,flagz=1'b0;
parameter [2:0] Add=3'b000,
sub=3'b001,
mul=3'b010,
And=3'b011,
Or=3'b100,
Nand=3'b101,
Nor=3'b110,
Xor=3'b111;
always @(opcode or op1 or op2)
begin
case(opcode)
Add: begin
result=op1+op2;
flagc=result[8];
flagz=(result==16'b0);
end
sub: begin
result=op1-op2;
flagc=result[8];
flagz=(result==16'b0);
end
mul: begin
result=op1*op2;
flagz=(result==16'b0);
end
And: begin
result=op1&op2;
flagz=(result==16'b0);
end
Or: begin
result=op1|op2;
flagz=(result==16'b0);
end
Nand: begin
result=~(op1&op2);
flagz=(result==16'b0);
end
Nor: begin
result=~(op1|op2);
flagz=(result==16'b0);
end
Xor: begin
result=op1^op2;
flagz=(result==16'b0);
end
default:begin
result=16'b0;
flagc=1'b0;
flagz=1'b0;
end
endcase
end
endmodule