package com.vytrack.step_definitions;

import com.vytrack.utilities.DBUtils;
import com.vytrack.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;

public class Hooks {

    @Before
    public void setUp(){
        System.out.println("\tthis is coming from BEFORE");
        Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        Driver.get().manage().window().maximize();

    }

    @After
    public void tearDown(Scenario scenario){
        if(scenario.isFailed()){
            final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
            scenario.attach(screenshot,"image/png","screenshot");
        }

     //   Driver.closeDriver();

    }

    @Before("@db")// but i want to use this when the scenario has @db tag (which means when i will connect to database)
    public void setUpDB(){
        System.out.println("Connecting to database...");
        DBUtils.createConnection();// i am connecting at the beginning of my each test
    }

    @After("@db")// but i want to use this when the scenario has @db tag (which means when i will connect to database)
    public void tearDownDB(){
        System.out.println("close database connection...");
        DBUtils.destroy();// then i am closing it after each of my test
    }

    @After
    public void closeBrowser(){
        Driver.closeDriver();
    }




}
