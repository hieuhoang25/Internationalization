package com.hicode.multispringbackend.utils;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.MessageSourceResolvable;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.support.RequestContextUtils;

import java.util.Locale;

@Component
@Slf4j
public class MessageUtils {
    @Autowired
    private MessageSource messageSource;

    @Autowired
    HttpServletRequest request;

    @Autowired
    private LocaleResolver localeResolver;
    public String getMessage(String name){
//        Locale locale = LocaleContextHolder.getLocale();
//        Locale locale = RequestContextUtils.getLocale(request);
            Locale locale = localeResolver.resolveLocale(request);
        log.info("{}",  locale);
        return messageSource.getMessage(name, null, locale);
    }
    public String getMessage(MessageSourceResolvable resolvable){
        return messageSource.getMessage(resolvable, localeResolver.resolveLocale(request));
    }

    public String getMessage(String name, Object ... params){
        return messageSource.getMessage(name, params, localeResolver.resolveLocale(request));
    }


}
