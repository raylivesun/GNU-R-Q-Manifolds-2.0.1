## Process this file with automake to produce Makefile.in

## Created by Anjuta

AM_CPPFLAGS = \
	-DPACKAGE_LOCALE_DIR=\""$(localedir)"\" \
	-DPACKAGE_SRC_DIR=\""$(srcdir)"\" \
	-DPACKAGE_DATA_DIR=\""$(pkgdatadir)"\" \
	$(GNU_R_Q_MANIFOLDS_2_0_1_CFLAGS)

AM_CFLAGS =\
	 -Wall\
	 -g

bin_PROGRAMS = gnu_r_q_manifolds_2_0_1

gnu_r_q_manifolds_2_0_1_SOURCES = \
	main.cc

gnu_r_q_manifolds_2_0_1_LDFLAGS = 

gnu_r_q_manifolds_2_0_1_LDADD = $(GNU_R_Q_MANIFOLDS_2_0_1_LIBS)


if NATIVE_WIN32
gnu_r_q_manifolds_2_0_1_LDFLAGS += -mwindows
endif
