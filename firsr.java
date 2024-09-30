class firsr {
   public static  void main(String arg[]){
    int x = 10/0;
    try {
        System.err.println("x");
    } catch (ArithmeticException e) {
      System.out.println("e");
    }
    
   }
}