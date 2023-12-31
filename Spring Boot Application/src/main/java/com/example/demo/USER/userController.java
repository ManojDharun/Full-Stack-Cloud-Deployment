package com.example.demo.USER;

import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.Connection;
import java.sql.Statement;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.ResultSet;
import java.util.List;

@RestController
public class userController {
    @PostMapping("/formData")
    public List Retreive(@RequestBody LoginForm loginForm){
        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://userdb.coslhabink4m.eu-north-1.rds.amazonaws.com:3306/userDB?allowPublicKeyRetrieval=true&useSSL=false", "root", "manojkannan");
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT NAME,EMAIL,PASSWORD FROM userdetails");
            while(rs.next()) {
                String name = rs.getString("Name");
                String email = rs.getString("Email");
                String password = rs.getString("Password");
                if(email.equals(loginForm.getEmail()) && password.equals(loginForm.getPassword())){
                    return List.of("You are allowed");
                }
            }
        }catch(SQLException ex){
            System.out.println(ex.getMessage());
        }
        return List.of("You are not allowed");
    }
    @PostMapping("/addUser")
    public List addUser(@RequestBody LoginForm loginForm) {
        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://userdb.coslhabink4m.eu-north-1.rds.amazonaws.com:3306/userDB?allowPublicKeyRetrieval=true&useSSL=false", "root", "manojkannan");
            PreparedStatement stmt = con.prepareStatement("INSERT INTO userdetails" +
                    "  (name, email, password) VALUES " +
                    " (?, ?, ?);");
            stmt.setString(1, loginForm.getName());
            stmt.setString(2, loginForm.getPassword());
            stmt.setString(3, loginForm.getPassword());
            stmt.executeUpdate();
            return List.of("Data has been added successfully");
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }
        return List.of("Data is not added!!");
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/locationData")
    public List<String> locationData(@RequestBody Location location) {
        try {
            Connection con = DriverManager.getConnection("jdbc:mysql://userdb.coslhabink4m.eu-north-1.rds.amazonaws.com:3306/userDB?allowPublicKeyRetrieval=true&useSSL=false", "root", "manojkannan");
            String query = "SELECT Temperature, Humidity, Pressure, Windspeed FROM Locdetails WHERE Locname = '" + location.getLocation() + "'";
            Statement statement = con.createStatement();
            ResultSet rs = statement.executeQuery(query);
            if (rs.next()) {
                String temperature = rs.getString("Temperature");
                String humidity = rs.getString("Humidity");
                String pressure = rs.getString("Pressure");
                String windspeed = rs.getString("Windspeed");
                return List.of(temperature, humidity, pressure, windspeed);
            } else {
                return List.of("Data Not Found");
            }
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }
        return List.of("Error Occurred");
    }
}



