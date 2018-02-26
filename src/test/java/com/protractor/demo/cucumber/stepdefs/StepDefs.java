package com.protractor.demo.cucumber.stepdefs;

import com.protractor.demo.ProtractorTechDemoApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = ProtractorTechDemoApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
