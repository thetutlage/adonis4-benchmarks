# Adonis benchmarks

The benchmarks of AdonisJs are between **Adonis3.2** and **Adonis4.0-dev**. The benchmarks are just written for the sake of finding the performance benefits between 3.2 and 4.0

## Results

The results on **Macbook Pro (16 GB 1600 MHz DDR3) & (2.2 GHz Intel Core i7)** are:

```
adonis-3.2
Requests per second:    2778.39 [#/sec] (mean)

adonis-4.0
Requests per second:    8674.41 [#/sec] (mean)
```

The higher is better

## Boilerplates

1. The [slim boilerplate](https://github.com/adonisjs/adonis-slim-app) is used for Adonisjs 4.0

2. Adonis3.2 default boilerplate has been modified to be as slim as possible. Under the hood I removed

    - Sessions
    - Orm
    - All middleware
    - Events
    - Ace commands
    - Unnecessary files and directories.
    
## Benchmarks
The benchmarks are executed via **apache bench**. Run the following command on your machine to execute the benchmarks.

```
sh install.sh
sh run.sh
```
