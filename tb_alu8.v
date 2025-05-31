`timescale 1ns / 1ps


module tb_alu8();
reg [2:0]opcode;
reg [7:0] op1,op2;
wire[15:0] result;
wire flagc;
wire flagz;
reg [2:0] count=3'd0;
alu8 UUT(opcode,op1,op2,result,flagc,flagz);
initial
begin
opcode=3'b0;
op1=8'd0;
op2=8'd0;
#100;
op1=8'hAA;
op2=8'h55;
for(count=0;count<8;count=count+1'b1)
begin
opcode=count;
#20;
end
end
endmodule