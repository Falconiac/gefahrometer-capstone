package de.neuefische.backend.service;

import de.neuefische.backend.model.AppUser;
import de.neuefische.backend.repository.UserRepo;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class AppUserDetailService implements UserDetailsService {

    private final UserRepo userRepo;

    public AppUserDetailService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser user = userRepo.findByAccountName(username)
                .orElse(null);
        if(user == null){
            return null;
        }
        return new User(user.getAccountName(), user.getPasswordHash(), Collections.emptyList());
    }
    private List<SimpleGrantedAuthority> extractSimpleGrantedAuthorities(AppUser user) {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        for (String s : user.getRoles()) {
            SimpleGrantedAuthority simpleGrantedAuthority = new SimpleGrantedAuthority(s);
            authorities.add(simpleGrantedAuthority);
        }
        return authorities;
    }

}
