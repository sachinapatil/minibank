<%@ page import ="java.sql.*" %>
<%
    String user1 = request.getParameter("fname");    
    String mobno1 = request.getParameter("mob-no");
    String acno1 = request.getParameter("ac-no");
    
    
    Class.forName("com.mysql.jdbc.Driver");
    
    Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/devops","root","root");
    
    Statement st = con.createStatement();
    
    //ResultSet rs;
    int i = st.executeUpdate("insert into userlist(name,mobno,acno) values('" + user1 + "','" + mobno1 + "','" +acno1+ "')");
    if (i > 0) {
        //session.setAttribute("userid", user);
        response.sendRedirect("message.jsp");
       // out.print("Registration Successfull!"+"<a href='index.jsp'>Go to Login</a>");
    } else {
        response.sendRedirect("index.jsp");
    }
%>